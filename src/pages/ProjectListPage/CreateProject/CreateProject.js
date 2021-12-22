import s from './CreateProject.module.scss'
import CloseButton from '../../../shared/components/Buttons/closeButton'
import Input from '../../../shared/components/Input/Input'
import InputAttr from '../../../shared/components/Input/InputAttr'
import SubmitButton from '../../../shared/components/Buttons/submitButton';

export default function CreateProject({onClick}) {
    return (<>
    <div className={s.bg}>
    <CloseButton className={s.closeBtn} onClick={onClick}/>
    <h2 className={s.title}>Створення проекту</h2>
    <Input
     {...InputAttr.name} />
    <Input {...InputAttr.description} />
        <SubmitButton text="Готово" className={s.submitBtn}/>
        <button type='button' className={s.cancelBtn} onClick={onClick}>Відміна</button>
    </div>
    </>)
};
