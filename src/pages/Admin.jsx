
export default function Admin() {
  return (
    <main className="section">
      <p className="eyebrow">STORE MANAGEMENT</p>
      <h1>Admin Dashboard</h1>

      <div className="admin-grid">
        <div className="page-panel">
          <h2>Products</h2>
          <p>Product management will be added here.</p>
        </div>

        <div className="page-panel">
          <h2>Orders</h2>
          <p>Customer orders will appear here when connected.</p>
        </div>

        <div className="page-panel">
          <h2>Customers</h2>
          <p>Customer management will be added here.</p>
        </div>
      </div>

      <p className="form-note">
        This is a demo page, not a secured admin dashboard. We will add
        proper access protection before connecting real customer data.
      </p>
    </main>
  );
}
