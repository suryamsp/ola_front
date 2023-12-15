
export function Admin() {
  return (
    <form className="login-page">
      <div class="form-group">
        <label for="exampleInputEmail1">User Name</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" class="btn btn-primary" style={{ backgroundColor: "rgb(195, 74, 74)" }}>Submit</button>
      <hr></hr>
      <label className="New-account">Or</label>
      <label for="exampleInputPassword1">Secret Key</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Secret Key" />

    </form>
  );
}
