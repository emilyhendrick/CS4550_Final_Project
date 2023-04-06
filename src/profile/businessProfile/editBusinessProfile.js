import React from "react";

const EditBusinessProfileComponent = (
    {
      userProfile = {
        "name": "Test User",
        "profilePic": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
        "handle": "test101011",
        "bio": "hello! this is my bio",
        "email": "testUserEmail000@gmail.com",
        "password": "password",
        "address": "100 Boston St, Boston MA, 02222"
      }
    }
) => {
  return(
      <div>
        <div className={"row justify-content-between align-items-center"}>
          <div className={"col-6 pb-2 pt-2"}><h3 className={"m-0"}>Account Details</h3></div>
          <div className={"col-6 text-end"}>
            <button type="button" className="btn btn-primary">Exit and Save</button>
          </div>
        </div>
        <div className={"mb-3"} style={{border: "1px solid LightGrey", borderRadius: 5}}>
          <div className={"m-2"}>
            <p className={"fw-bold"}>Basic Info</p>
            <p>Banner Image</p>
            <div className="picture-container">
              <div className="picture">
                <img src={userProfile.profilePic} className="mb-3 me-2"
                     width="100$" height="64px"/>
                <input type="file" className=""/>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="nameField" className="form-label mb-1">Name</label>
              <input type="text" className="form-control"
                     id="nameField" placeholder={userProfile.name}/>
            </div>
            <div className="mb-3">
              <label htmlFor="nameField" className="form-label mb-1">Address</label>
              <input type="text" className="form-control"
                     id="nameField" placeholder={userProfile.address}/>
            </div>
            <div className="mb-3">
              <label htmlFor="nameField" className="form-label mb-1">Description</label>
              <input type="text" className="form-control"
                     id="nameField" placeholder={userProfile.bio}/>
            </div>
          </div>
        </div>
        <div style={{border: "1px solid LightGrey", borderRadius: 5}}>
          <div className={"m-2"}>
            <p className={"fw-bold"}>Login Info</p>
            <div className="mb-3">
              <label htmlFor="nameField" className="form-label mb-1">Email address</label>
              <input type="email" className="form-control"
                     id="nameField" placeholder={userProfile.email}/>
            </div>
            <div className="mb-3">
              <label htmlFor="nameField" className="form-label mb-1">Password</label>
              <input type="password" className="form-control"
                     id="nameField" placeholder={userProfile.password}/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default EditBusinessProfileComponent;