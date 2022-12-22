const url = "https://api.cloudinary.com/v1_1/dzcn1bpw7/image/upload";

export async function imageUpload(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "d9edyb6z");

  const data = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const result = await data.text();
  const json = JSON.parse(result);
  console.log(json);
  return json.url;
}
