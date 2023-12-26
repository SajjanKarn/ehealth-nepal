import { Navigation } from "@/components/Navigation.component";

export default function Login() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="card">
          <div class="input-group">
            <input
              type="email"
              placeholder="abc@example.com"
              class="form-control"
            />
          </div>
          <div class="input-group">
            <input
              type="email"
              placeholder="Your Password"
              className="form-control"
            />
          </div>
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
}
