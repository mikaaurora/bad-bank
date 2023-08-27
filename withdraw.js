function Withdraw() {
  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [balance, setBalance] = React.useState('100')
  const [withdraw, setWithdraw] = React.useState('')
  const ctx = React.useContext(UserContext)

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label)
      setTimeout(() => setStatus(''), 3000)
      return false
    }
    return true
  }

  function handleWithdraw() {
    if (!validate(withdraw, 'withdraw')) return
    ctx.users.push({ balance: 100 })
    setShow(false)
  }

  function clearForm() {
    setWithdraw('')
    setShow(true)
  }

  return (
    <Card
      bgcolor="primary"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            Balance: {balance}
            <br />
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Withdraw Amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Withdraw More Money
            </button>
          </>
        )
      }
    />
  )
}
