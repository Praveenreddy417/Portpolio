import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataAction } from "./Store/actions/userdataAction";

const Contact = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userdata.userdata.all);

  useEffect(() => {
    dispatch(getUserDataAction())
  })
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Contact Me</h1>
      {user.map((data, index) =>
        <div>
          <div key={index}>{data.id}</div>
          <span key={index}>{data.title}</span>
        </div>
      )}
    </div>
  )
};

export default Contact;