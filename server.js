import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config();

//databse config
connectDB();

const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//PORT
const PORT = process.env.PORT || 4000;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${ PORT}`.bgCyan
      .white
  );
});

//rest api
app.get("/", (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Welcome — Shopping Cart</title>
  <style>
    :root{
      --bg1:#0f172a;
      --bg2:#0ea5a4;
      --muted:#6b7280;
      --accent:#7c3aed;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
      background: radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.12), transparent),
                  linear-gradient(120deg,var(--bg1), #04263a 60%);
      color: #0b1220;
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:32px;
    }
    .card{
      width:100%;
      max-width:960px;
      background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,250,0.96));
      border-radius:18px;
      box-shadow: 0 12px 30px rgba(2,6,23,0.45);
      display:grid;
      grid-template-columns: 1fr 420px;
      overflow:hidden;
    }
    .left{padding:44px 48px;}
    .eyebrow{
      display:inline-block;
      font-weight:600;
      padding:6px 10px;
      border-radius:999px;
      background: linear-gradient(90deg,var(--bg2), var(--accent));
      color:white;
      font-size:13px;
      margin-bottom:18px;
    }
    h1{margin:0 0 8px 0;font-size:36px;line-height:1.02;color:#061428;}
    h2.tagline{margin:0 0 18px 0;font-size:18px;color:var(--muted);font-weight:500;}
    p.lead{color:#475569;margin:8px 0 22px 0;max-width:56ch;}
    .meta{display:flex;gap:12px;align-items:center;}
    .author{display:flex;gap:12px;align-items:center;font-weight:600;color:#0f172a;}
    .avatar{
      width:44px;height:44px;border-radius:8px;display:inline-grid;place-items:center;
      background:linear-gradient(135deg,var(--accent), var(--bg2));
      color:white;font-weight:700;font-size:15px;
    }
    .cta{margin-top:26px;display:flex;gap:12px;}
    .btn{padding:12px 18px;border-radius:10px;border:0;font-weight:700;cursor:pointer;}
    .btn-primary{background:linear-gradient(90deg,var(--bg2), var(--accent));color:white}
    .btn-ghost{background:transparent;border:1px solid #e6e9ee;color:#0b1220}
    .right{padding:34px;display:flex;flex-direction:column;align-items:center;justify-content:center;}
    .cart-preview{width:100%;max-width:360px;border-radius:12px;padding:18px;background:#fff;box-shadow:0 8px 30px rgba(2,6,23,0.06);}
    .product{display:flex;gap:12px;align-items:center;}
    .thumb{width:64px;height:64px;border-radius:10px;background:#eef2ff;display:grid;place-items:center;font-weight:700;color:#0f172a}
    .prod-info{flex:1}
    .prod-title{font-weight:700;margin:0}
    .prod-sub{color:var(--muted);font-size:13px;margin-top:4px}
    .price{font-weight:800}
    .total{display:flex;justify-content:space-between;margin-top:16px;padding-top:14px;border-top:1px dashed #e6eef7}
    @media (max-width:880px){.card{grid-template-columns:1fr;}.right{order:-1}}
  </style>
</head>
<body>
  <main class="card" role="main">
    <section class="left">
      <div class="eyebrow">Welcome</div>
      <h1>Welcome to <span style="background:linear-gradient(90deg,var(--bg2),var(--accent));-webkit-background-clip:text;color:transparent;">Shopping Cart</span></h1>
      <h2 class="tagline">An e-commerce app — Project by Shiva Charan</h2>
      <h3 class="lead">A simple, elegant front-facing welcome page for your e-commerce project.</h3>
      <div class="meta">
        <div class="author">
          <div class="avatar">SC</div>
          <div>
            <div style="font-size:14px;">Shiva Charan</div>
            <div style="font-size:12px;color:var(--muted);margin-top:2px">IIT Patna— Web Demo</div>
          </div>
        </div>
      </div>
      <div class="cta">
        <button class="btn btn-primary" onclick="window.location.href='http://localhost:3000'">Explore Store</button>
      </div>
    </section>
  </main>
</body>
</html>`);
});

