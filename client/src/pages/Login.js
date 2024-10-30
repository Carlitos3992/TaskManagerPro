function Login() {
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  