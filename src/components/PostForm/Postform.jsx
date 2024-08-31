/* eslint-disable react/prop-types */
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RTE, Select, Input } from "../index";
import appwriteService from "../../appwrite/services/service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Postform({ post }) {
    
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        Title: post?.Title || "",
        slug: post?.slug || "",
        Content: post?.Content || "",
        Status: post?.Status || "active",
        featuredImage: post?.featuredImage || "null",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  
 
  const onSubmit = async (data) => {
    
    console.log(data);
    if (post) {
      const file = data.image[0] 
        ? appwriteService.uploadFile(data.image[0])
        : null;
        console.log("featuredImage:",post.featuredImage)
      
      if (file) { // if file is uploaded, delete the old one 
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, { 
        ...data, // update the post with new data
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) { 
        navigate(`/post/${dbPost.$id}`);
      }
    } 
    else { // if post is not present, create a new one
      // const file = data.image[0]
      //   ? appwriteService.uploadFile(data.image[0])
      //   : null;
        const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        console.log("Featured IMG:",data.featuredImage)
        console.log("PostForm userID:",userData.$id)
        const dbPost = await appwriteService.createPost({
          ...data, 
          UserId: userData.userData.$id,
        });

        if (dbPost) {
          // here debug
          navigate(`/post/${dbPost.$id}`);
        }
      }
      else{
        console.log("file not uploaded");
      }
    }
  };

  const slugTransform = useCallback((value) => { 
    if (value) {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-") // replace all non-alphanumeric chars at the beginning
        .replace(/\s/g, "-"); // replace all spaces with dash
        
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, {name}) => { // watch for changes in title 
      if (name === "Title") {
        setValue("slug", slugTransform(value.Title, {shouldValidate: true})); // set the slug value After transforming it
      }
    });

    return () => {
      subscription.unsubscribe(); // optional clean up
    };
  }, [watch, slugTransform, setValue]);
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
          <div>
            <Input
              placeholder="Title"
              className="mb-4"
              {...register("Title", { required: true })}
            />
            <Input
              placeholder="Slug"
              className="mb-4"
              {...register("slug", { required: true })}
              onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), {
                  shouldValidate: true,
                });
              }}
            />
            {/* <RTE
              name="content"
              label="Content"
              control={control}
              defaultValue={getValues("Content")}
            /> */}
          </div>
          <div>
            <Input
              type="file"
              placeholder="featured Image"
              accept="*.jpg, *.jpeg, *.png"
              {...register("image", { required: !post })} 
            />

            {post ? (
              <div>
                <img
                  className="rounded-lg"
                  src={appwriteService.getFilePreview(post.featuredImage)}
                  alt={post.Title}
                />
              </div>
            ): "Nothing To Show"}
             
            <Select 
            options={["select", "active", "inactive"]}
            {...register("Status", { required: true })}
            /> 
            <button type="submit" className="btn btn-primary">
              {post ? "Update" : "Create"}
            </button>

          </div>
        </form>
      </div>
    </>
  );
}

export default Postform;
