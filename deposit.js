function Deposit() {
  const [show, setShow] = React.useState(true)
  const [status, setStatus] = React.useState('')
  const [deposit, setDeposit] = React.useState('')
  const [balance, setBalance] = React.useState(() => {
    const storedBalance = localStorage.getItem('balance')
    return storedBalance ? Number(storedBalance) : 0
  })
  const ctx = React.useContext(UserContext)

  React.useEffect(() => {
    localStorage.setItem('balance', balance)
  }, [balance])

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

    const depositAmount = Number(deposit)

    if (isNaN(depositAmount)) {
      alert('Enter a number for the amount.')
    } else if (depositAmount < 0) {
      alert('Enter a positive value to deposit.')
    }

    const newBalance = Number(balance) + Number(deposit)

    setBalance(newBalance)
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
              Check updated balance
            </button>
          </>
        )
      }
    />
  )
}
