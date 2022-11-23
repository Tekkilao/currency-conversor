import './currency.css'
export default function Currency(props) {
 const {
    currencyValue,
    onChangeAmount,
    typeOfCurrency
  } = props
  return (
    <div className='currency'>
       {typeOfCurrency} <input type="number" value={currencyValue} onChange={onChangeAmount} className='currencyInput'/>
    </div>
  )
}
