function Deposit() {
  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [balance, setBalance] = React.useState('100')
  const [deposit, setDeposit] = React.useState('')
  const ctx = React.useContext(UserContext)

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label)
      setTimeout(() => setStatus(''), 3000)
      return false
    }
    return true
  }

  function handleDeposit() {
    if (!validate(deposit, 'deposit')) return
    ctx.users.push({ balance: 100 })
    setShow(false)
  }

  function clearForm() {
    setDeposit('')
    setShow(true)
  }

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
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
              id="deposit"
              placeholder="Deposit Amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Deposit More Money
            </button>
          </>
        )
      }
    />
  )
}
