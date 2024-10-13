import './Form.scss'
export const Form = () => {
    const formSubmit = () => {
console.log('submit')
    }
    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input type="text" />
                    <button></button>
                </label>
            </form>
        </div>
    )
}