package code.startup.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import code.startup.models.Cargo;

public interface CargoRepository extends JpaRepository<Cargo, Integer> {

	@Query(value = "SELECT COUNT(nome_cargo) from db_codestartup.cargo", nativeQuery = true)
	Integer quantidadeDeCargos();
	
}
