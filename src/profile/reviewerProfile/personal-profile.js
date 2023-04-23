import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as userService from "../../services/users-service";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk, profileThunk} from "../../services/user-thunks";
import {findReviewsByUsername} from "../../services/users-service";

const PersonalProfileComponent = () => {
  const {username} = useParams();
  const {currentUser} = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = profile.username;
  const [searchResults, setSearchResults] = useState([]);
  const searchForReviews = async () => {
    const results = await findReviewsByUsername(searchTerm);
    setSearchResults(results);
    console.log(searchResults);
  };
  useEffect(() => {
    if (searchTerm) {
      searchForReviews();
    }
  }, [searchTerm, searchResults]);
  const getProfile = async () => {
    const action = await dispatch(profileThunk());
    console.log(action);
    setProfile(action.payload);
  };
  const getUserByUsername = async () => {
    const user = await userService.findUserByUsername(username);
    console.log(user);
    setProfile(user);
  };
  const logout = async () => {
    await dispatch(logoutThunk());
    navigate("/login");
  };
  const updateUser = async () => {
    const user = await userService.updateUser(profile);
    setProfile(user);
  };

  useEffect(() => {
    if (username) {
      getUserByUsername();
    } else {
      getProfile();
    }
  }, []);
  console.log(username);
  console.log(currentUser);
  console.log(profile);
  // console.log(profile.username);

  return (
      <div className={"row"}>
        {(!username && currentUser) && (
            <div>
              <div className={"row justify-content-between align-items-center"}>
                <div className={"col-6 pb-2 pt-2"}><h3 className={"m-0"}>Account
                  Details</h3></div>
              </div>
              <div className={"mb-3"}
                   style={{border: "1px solid LightGrey", borderRadius: 5}}>
                <div className={"m-2"}>
                  <p className={"fw-bold"}>Basic Info</p>
                  {(currentUser.userRole === 'Personal') && (
                      <div>
                        <label>Profile Picture</label>
                        {currentUser && (
                            <div>
                              <img src={profile.profilePic}
                                   className="rounded-circle mb-3 me-2"
                                   width="64px" height="64px"
                                   alt={"profile picture"}/>
                              <input
                                  type="file"
                                  className="form-control"
                                  onChange={(e) => {
                                    setProfile(
                                        {
                                          ...profile,
                                          profilePic: e.target.value
                                        })
                                    userService.updateUser(profile);
                                  }
                                  }
                              />
                              <br/>
                            </div>
                        )}
                        <label>Username</label>
                        {currentUser && (
                            <input
                                type="text"
                                className="form-control"
                                value={profile.username}
                                onChange={(e) => {
                                  setProfile(
                                      {...profile, username: e.target.value});
                                  userService.updateUser(profile);
                                }
                                }
                            />
                        )}
                        <label>First Name</label>
                        {currentUser && (
                            <input
                                type="text"
                                className="form-control"
                                value={profile.firstName}
                                onChange={(e) => {
                                  setProfile(
                                      {...profile, firstName: e.target.value})
                                  userService.updateUser(profile);
                                }
                                }
                            />
                        )}
                        <label>Last Name</label>
                        {currentUser && (
                            <input
                                type="text"
                                className="form-control"
                                value={profile.lastName}
                                onChange={(e) => {
                                  setProfile(
                                      {...profile, lastName: e.target.value});
                                  userService.updateUser(profile);
                                }
                                }
                            />
                        )}
                      </div>
                  )}
                  {(currentUser.userRole === 'Business') && (
                      <div>
                        <label>Profile Picture</label> <br/>
                        <img src={profile.profilePic}
                             className="rounded-circle mb-3 me-2"
                             width="64px" height="64px"
                             alt={"profile picture"}/>
                        <input
                            type="file"
                            className="form-control"
                            onChange={(e) => {
                              setProfile(
                                  {
                                    ...profile,
                                    profilePic: e.target.value
                                  })
                              userService.updateUser(profile);
                            }
                            }
                        />
                        <br/>
                        <label>Business Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={profile.businessName}
                            onChange={(e) => {
                              setProfile(
                                  {...profile, businessName: e.target.value});
                              userService.updateUser(profile);
                            }
                            }
                        />
                        <label>Business Address</label>
                        <input
                            type="text"
                            className="form-control"
                            value={profile.businessAddress}
                            onChange={(e) => {
                              setProfile(
                                  {
                                    ...profile,
                                    businessAddress: e.target.value
                                  });
                              userService.updateUser(profile);
                            }
                            }
                        />
                      </div>
                  )}
                </div>
              </div>
              <div style={{border: "1px solid LightGrey", borderRadius: 5}}>
                <div className={"m-2"}>
                  <p className={"fw-bold"}>Login Info</p>
                  <div className="mb-3">
                    {currentUser && (
                        <div>
                          <label>Email</label>
                          {currentUser && (
                              <input
                                  type="email"
                                  className="form-control"
                                  value={profile.email}
                                  onChange={(e) => {
                                    setProfile(
                                        {...profile, email: e.target.value});
                                    userService.updateUser(profile);
                                  }
                                  }
                              />
                          )}
                          <br/>
                          <label>Password</label>
                          {currentUser && (
                              <input
                                  type="password"
                                  className="form-control"
                                  value={profile.password}
                                  onChange={(e) => {
                                    setProfile(
                                        {
                                          ...profile,
                                          password: e.target.value
                                        });
                                    userService.updateUser(profile);
                                  }
                                  }
                              />
                          )}
                        </div>
                    )}
                  </div>
                </div>
              </div>
              <div>
                {currentUser && (
                    <button onClick={() => logout()} className="btn btn-danger">
                      Logout
                    </button>
                )}
              </div>
            </div>)}
        {username && (
            <div>
              {(profile.userRole === 'Personal') && (
                  <div>
                    <img src={profile.profilePic}
                         className="rounded-circle mb-3 me-2"
                         width="64px" height="64px"
                         alt={"profile picture"}/>
                    <h2>{profile.firstName} {profile.lastName}</h2>
                    <p>@{profile.username}</p>
                    <hr/>
                    <p>{profile.firstName} {profile.lastName}'s Reviews</p>

                  </div>
              )
              }
              {(profile.userRole === 'Business') && (
                  <div>
                    <img src={profile.profilePic}
                         className="rounded-circle mb-3 me-2"
                         width="64px" height="64px"
                         alt={"profile picture"}/>
                    <h2>{profile.businessName}</h2>
                    <p>{profile.businessAddress}</p>
                    <hr/>
                    <p>Reviews of {profile.businessName}</p>
                    {searchResults.map((result) => {
                      return (
                          <div>
                              <h2>{result.reviewer}</h2>
                          </div>
                      );
                    })}
                  </div>
              )}
            </div>
        )}
      </div>
  );
};

export default PersonalProfileComponent;