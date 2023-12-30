
export function Forget() {
  return (
    <form className="login-page">

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">New Password</label>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="New Password" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
      </div>
      <button type="submit" className="btn btn-primary btn_click">Update</button>

    </form>
  );
}
