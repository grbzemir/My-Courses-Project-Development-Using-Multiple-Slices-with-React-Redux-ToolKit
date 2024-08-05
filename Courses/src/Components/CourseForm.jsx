import React from 'react'
import { useSelector } from 'react-redux'

function CourseForm() {
    const { name, description, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            description: state.form.description,
            cost: state.form.cost
        };
    });

    console.log(name, description, cost);

    return (
        <div className="courseForm panel">
            <h4 className="subtitle is-3">Kurs Ekle</h4>
            <form>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Kurs Adı</label>
                        <input className="input is-expanded" value={name} readOnly />
                    </div>
                    <div className="field">
                        <label className="label">Açıklama</label>
                        <input className="input is-expanded" value={description} readOnly />
                    </div>
                    <div className="field">
                        <label className="label">Fiyat</label>
                        <input className="input is-expanded" type="number" value={cost} readOnly />
                    </div>
                </div>
                <div className="field">
                    <button className='button is-primary'>Kaydet</button>
                </div>
            </form>
        </div>
    )
}

export default CourseForm
