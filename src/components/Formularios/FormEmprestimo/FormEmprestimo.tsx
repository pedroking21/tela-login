import { useState } from 'react';
import estilo from './FormEmprestimo.module.css';
import EmprestimoRequests from '../../../fetch/EmprestimoRequests';

function FormEmprestimo() {
    const [formData, setFormData] = useState({
        idAluno: 0,
        idLivro: 0,
        dataEmprestimo: '',
        dataDevolucao: '',
        statusEmprestimo: false,
    });

    // Função para atualizar o state
    const handleChange = (nome: string, valor: string) => {
        setFormData({ ...formData, [nome]: valor });
    };

    // função para recuperar dados do formulário e enviar para a requisição
    const handleSubmit = async (formData: { idAluno: number; idLivro: number; dataEmprestimo: string; dataDevolucao: string; statusEmprestimo: boolean; }) => {
        const resposta = await EmprestimoRequests.enviaFormularioEmprestimo(JSON.stringify(formData));
        if(resposta) {
            alert('Emprestimo cadastrado com sucesso.');
        } else {
            alert('Erro ao cadastrar emprestimo.');
        }
    }

    return (
        <section className={estilo['sec-form-emprestimo']}>
            <h1>Cadastro Emprestimo</h1>
            <form action="post" onSubmit={(e) => { e.preventDefault(); handleSubmit(formData); }}
                    className={estilo['form-emprestimo']}
                >
                    <label htmlFor="">
                        ID Aluno
                        <input
                            type="text"
                            name="idAluno"
                            id="idAluno"
                            required
                            minLength={1}
                            onChange={(e) => handleChange("idAluno", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        ID Livro
                        <input
                            type="text"
                            name="idLivro"
                            id="idLivro"
                            required
                            minLength={1}
                            onChange={(e) => handleChange("idLivro", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Data do Emprestimo
                        <input
                            type="date"
                            name="dataEmprestimo"
                            id="dataEmprestimo"
                            onChange={(e) => handleChange("dataEmprestimo", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Data de Devolução
                        <input
                            type="date"
                            name="dataDevolucao"
                            id="dataDevolucao"
                            onChange={(e) => handleChange("dataDevolucao", e.target.value)}
                        />
                    </label>

                    <label htmlFor="">
                        Status do Emprestimo
                        <input
                            type="text"
                            name="statusEmprestimo"
                            id="statusEmprestimo"
                            minLength={4}
                            onChange={(e) => handleChange("statusEmprestimo", e.target.value)}
                        />
                    </label>

                <input type="submit" value="ENVIAR" />
            </form>
        </section>
    );
}

export default FormEmprestimo;