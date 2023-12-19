
export function Admin() {
  return (
    <form className="login-page">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">User Name</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary" style={{ backgroundColor: "rgb(195, 74, 74)" }}>Submit</button>
      <hr></hr>
      <label className="New-account">Or</label>
      <label htmlFor="exampleInputPassword1">Secret Key</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Secret Key" />

    </form>
  );
}
