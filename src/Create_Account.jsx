
export function Create_Account() {
  return (
    <form className="login-page">
      <div class="form-group">
        <label for="exampleInputPassword1">User Name</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="User Name" />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">New Password</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="New Password" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Confirm Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>

    </form>
  );
}
