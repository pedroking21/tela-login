import Cabecalho from "../../../components/Cabecalho/Cabecalho";
import FormEmprestimo from "../../../components/Formularios/FormEmprestimo/FormEmprestimo";
import Rodape from "../../../components/Rodape/Rodape";

function PCadastroEmprestimo() {
    return (
        <div className="pagina-grid">
            {/* Renderiza o cabeçalho da página */}
            <Cabecalho />

            {/* Renderiza o formulário de login */}
            <FormEmprestimo />

            {/* Renderiza o rodapé da página */}
            <Rodape />
        </div>
    );
}

export default PCadastroEmprestimo;