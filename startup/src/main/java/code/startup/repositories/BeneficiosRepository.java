package code.startup.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import code.startup.models.Beneficios;

public interface BeneficiosRepository extends JpaRepository<Beneficios, Integer>{

	@Query(value = "select * from db_codestartup.beneficios where id_funcionario = :id_funcionario", nativeQuery = true)
	List<Beneficios> fetchBeneficiosFuncionario(Integer id_funcionario);
}
