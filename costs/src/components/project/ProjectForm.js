import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm ({btnText}){
    return(
        <form className={styles.form}>
            <Input type="text" 
            text="Nome do projeto"
            name="name"
            placeholder="insira o nome do projeto"/>
            <div>
                <Input type="number" 
                text="Orcamento do projeto"
                name="budget"
                placeholder="insira o orçamento total"/>
            </div>
           <Select name="category_id" text="Selecionar a categoria" />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm