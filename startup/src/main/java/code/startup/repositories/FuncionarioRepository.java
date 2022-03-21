package code.startup.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import code.startup.models.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {
	
//Seleciona todos os funcionarios onde o id_cargo for igual ao id do cargo pesquisado. Ex.: Foi pesquisado o cargo de id = 1, então todos funcionários com esse mesmo id é selecionado
	@Query(value = "SELECT * FROM funcionario WHERE id_cargo = :id_cargo", nativeQuery = true)
	List<Funcionario> fetchByCargo(Integer id_cargo);
	
//Seleciona o id_cargo do funcionario onde o id_funcionario for igual ao id do funcionario pesquisado. Ex.: Foi pesquisado o id do funcionario = 1, então o cargo que ele ocupa é retornado em string
	@Query(value = "SELECT id_cargo FROM funcionario WHERE id_funcionario = :id_funcionario", nativeQuery = true)
	String fetchByIdCargo(Integer id_funcionario);

//Seleciona alguns atributos do cargo e junta a direita com a tabela funcionários com o id do cargo do funcionario e do cargo forem iguais	
	@SuppressWarnings("rawtypes")
	@Query(value = "select id_funcionario, nome_funcionario, cidade_funcionario, nome_cargo, nivel_cargo from cargo right join funcionario on funcionario.id_cargo = cargo.id_cargo where funcionario.id_cargo is not null order by nome_funcionario;", nativeQuery = true)
	List<List> fetchByFuncionariosComCargo();
	
	@Query(value = "select id_funcionario, nome_funcionario, cidade_funcionario, id_cargo from funcionario where funcionario.id_cargo is null order by nome_funcionario", nativeQuery = true)
	List<Funcionario> fetchByFuncionariosInativos();
	
	@Query(value = "SELECT COUNT(nome_funcionario) from db_codestartup.funcionario where id_cargo is not null", nativeQuery = true)
	Integer quantidadeFuncionariosAtivos();
	
}
