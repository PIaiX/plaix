import React, { useState } from 'react'

const FormCallback = () => {
    const [hasProject, setHasProject] = useState(false)

    return (
        <div className="form">
            <div className="top">
                <button type='button' className={(hasProject)?'':'active'} onClick={()=>setHasProject(false)}>
                    <div className='indicator'></div>
                    <span>Мне нужна консультация</span>
                </button>
                <button type='button' className={(hasProject)?'active':''} onClick={()=>setHasProject(true)}>
                    <div className='indicator'></div>
                    <span>У меня есть проект</span>
                </button>
            </div>
            {
                (hasProject)
                ? <form action="">
                    <div className="fw-5 mb-2">Телефон</div>
                    <input type="tel" placeholder='Телефон' className='mb-3'/>
                    <div className="fw-5 mb-2">Комментарий</div>
                    <textarea rows="5" placeholder='Ваш комментарий'  className='mb-3'></textarea>
                    <input type="file" />
                    <label className='fs-09 mt-4'>
                        <input type="checkbox"/>
                        <span className='gray'>Я согласен на обработку персональных данных</span>
                    </label>
                    <button type='button' className='btn-1 fs-11 mx-auto mt-4'>Оставить заявку</button>
                </form>
                : <form action="">
                    <div className="fw-5 mb-2">Телефон</div>
                    <input type="tel" placeholder='Телефон' className='mb-3'/>
                    <div className="fw-5 mb-2">Комментарий</div>
                    <textarea rows="5" placeholder='Ваш комментарий'></textarea>
                    <label className='fs-09 mt-4'>
                        <input type="checkbox"/>
                        <span className='gray'>Я согласен на обработку персональных данных</span>
                    </label>
                    <button type='button' className='btn-1 fs-11 mx-auto mt-4'>Оставить заявку</button>
                </form>
            }
        </div>
    );
};

export default FormCallback;