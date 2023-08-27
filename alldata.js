function AllData() {
  const ctx = React.useContext(UserContext)
  return (
    <>
      <h5>All Data</h5>
      {JSON.stringify(ctx)}
      <br />
    </>
  )
}
