package code.startup.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code.startup.models.Cargo;
import code.startup.repositories.CargoRepository;
import code.startup.services.exceptions.DataIntegrityViolationException;
import code.startup.services.exceptions.ObjectNotFoundException;

@Service
public class CargoService {

	@Autowired
	private CargoRepository cargoRepository;
	
	public List<Cargo> mostrarTodasCargos(){
		return cargoRepository.findAll();
	}
	
	public Cargo buscarUmCargo(Integer id_cargo) {
		Optional<Cargo> cargo = cargoRepository.findById(id_cargo);
		return cargo.orElseThrow(() -> new ObjectNotFoundException("Cargo não encontrado! O id procura foi " + id_cargo + "."));
	}
	
	public Cargo cadastrarCargo(Cargo cargo) {
		cargo.setId_cargo(null);
		return cargoRepository.save(cargo);
	}
	
	public Cargo editarCargo(Cargo cargo) {
		buscarUmCargo(cargo.getId_cargo());
		return cargoRepository.save(cargo);
	}
	
	public void deletarCargo(Integer id_cargo) {
		buscarUmCargo(id_cargo);
		try {
			cargoRepository.deleteById(id_cargo);
		} catch (org.springframework.dao.DataIntegrityViolationException e) {
			throw new DataIntegrityViolationException("O cargo não pode ser deletado, pois possui funcionarios relacionados.");
		}
	}
	
	public Integer quantidadeDeCargos() {
		Integer cargo = cargoRepository.quantidadeDeCargos();
		return cargo;
	}
}
