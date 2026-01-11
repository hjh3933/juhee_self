import axios from "axios";

function fileUpload() {
  const formData = new FormData();
  const file = document.getElementById("dynamic-file");
  formData.append("dynamic-userfile", file.files[0]);

  axios({
    method: "post",
    url: "/dynamicFile",
    data: FormData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => {
    console.log(res);
    console.log(res.data);
    console.log(res.data.path);
    document.querySelector("img").src = res.data.path;
  });
}
