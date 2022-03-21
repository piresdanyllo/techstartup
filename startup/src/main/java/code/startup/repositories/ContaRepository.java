package code.startup.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import code.startup.models.Conta;

public interface ContaRepository extends JpaRepository<Conta, Integer> {

	@SuppressWarnings("rawtypes")
	@Query(value = "select funcionario.id_funcionario, nome_funcionario, id_conta, banco_conta, agencia_conta, numero_conta from funcionario right join conta on funcionario.id_funcionario = conta.id_funcionario order by nome_funcionario", nativeQuery = true)
	List<List> fetchByContaDosFuncionarios();
}
