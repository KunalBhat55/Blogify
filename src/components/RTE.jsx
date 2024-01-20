/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Editor } from "@tinymce/tinymce-react";
import { Controller, useForm } from "react-hook-form";

export default function RTE({
  name,
  defaultValue = "",
  label,
  error,
  ...rest
}) {
  const { control } = useForm();

  return (
    <>
      <div>
        <Controller
          control={control}
          name="RTE"
          render={({ field: { onChange } }) => (
            <Editor
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={onChange}
            />
          )}
          
        />
      </div>
    </>
  );
}
