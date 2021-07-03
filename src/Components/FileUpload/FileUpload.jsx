import React from "react";
import { IconButton } from "@material-ui/core";
import { Camera } from "@material-ui/icons";
import ReactS3 from "react-s3";

const FileUpload = (props) => {
  const config = {
    bucketName: "empo-doc",
    dirName: "photos",
    region: "ca-central-1",
    accessKeyId: "AKIA4Y5ZOYXZZS7MHCFF",
    secretAccessKey: "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",
  };
  const onFileUploadClicked = (event) => {
    // this.setState({file:e.target.value})
    props.setFileName(event.target.files[0].name);
    // console.log((event.target.files[0]))
    ReactS3.uploadFile(event.target.files[0], config)
      .then((data) => {
        // console.log(data)
        props.setFile(data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      style={{ position: "absolute", marginLeft: "28%", marginTop: "-55px" }}
    >
      <input
        type="file"
        id={props.id}
        style={{ display: "none" }}
        value={props.value}
        onChange={(e) => onFileUploadClicked(e)}
      />
      <label
        htmlFor={props.id}
        style={{
          right: 0,
          marginRight: "-40%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          component={"span"}
          style={{
            backgroundColor: "rgba(164,199,114,0.64)",
            marginRight: "5px",
            color: "#707070",
          }}
        >
          <Camera />
        </IconButton>
        <p style={{ width: "100px", overflow: "hidden" }}>{props.helperText}</p>
      </label>
    </div>
  );
};

export default FileUpload;
