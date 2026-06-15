import { useForm } from "react-hook-form";
import { Link } from "react-router";

function RequerimentoForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Novo requerimento</h1>

        <>
            <label>Tipo de requerimento</label>
            <select id="tipo" {...register("tipo", {
                required: "Selecione um tipo de requerimento"
            })}>
                <option value="">Selecione</option>
                <option value="atestado">Atestado médico</option>
                <option value="revisao_nota">Revisão de nota</option>
            </select>
                {errors.tipo && <span>{errors.tipo.message}</span>}
        </>

        <label>Descrição do requerimento</label>
        <textarea id="descricao" {...register("descricao", {
            required: "Descrição é obrigatória",
            minLength: {
                value: 10,
                message: "A descrição deve ter no mínimo 10 caracteres"
            }
            })}>
        </textarea>
        {errors.descricao && <span>{errors.descricao.message}</span>}

        <label>Data do requerimento</label>
        <input type="date" id="data" {...register("data")}></input>

        <Link to="/requerimentos">Cancelar</Link>
        <button type="submit">Salvar</button>
    </form>
  )
}

export default RequerimentoForm;