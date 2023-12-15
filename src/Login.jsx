export function Login() {

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
      <div>
        <a className="creat-acc" href="http://localhost:5173/forget_password">Forget Password ?</a></div>
      <button type="submit" class="btn btn-primary">Login</button>
      <hr></hr>
      <div className="New-account">
        <img type="button" className="login-goo" src="./img/google.png"></img>
      </div>
      <div className="New-account"><a href="http://localhost:5173/new_user" className="creat-acc">Create Account ?</a></div>
    </form>
  );
}
