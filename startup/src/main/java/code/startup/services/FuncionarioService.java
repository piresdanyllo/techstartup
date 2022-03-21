package code.startup.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import code.startup.models.Cargo;
import code.startup.models.Funcionario;
import code.startup.repositories.FuncionarioRepository;

@Service
public class FuncionarioService {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@Autowired
	private CargoService cargoService;
	
	public List<Funcionario> mostrarTodosFuncionarios(){
		return funcionarioRepository.findAll();
	}
	
	public Funcionario buscarUmFuncionario(Integer id_funcionario) {
		Optional<Funcionario> funcionario = funcionarioRepository.findById(id_funcionario);
		return funcionario.orElseThrow();
	}
	
	public Funcionario adicionarFuncionario(Integer id_cargo, Funcionario funcionario) {
		funcionario.setId_funcionario(null);
		Cargo cargo = cargoService.buscarUmCargo(id_cargo);
		funcionario.setCargo(cargo);
		return funcionarioRepository.save(funcionario);
	}
	
	public void excluirFuncionario(Integer id_funcionario) {
		funcionarioRepository.deleteById(id_funcionario);
	}
	
	public Funcionario editarFuncionario(Funcionario funcionario) {
		buscarUmFuncionario(funcionario.getId_funcionario());
		return funcionarioRepository.save(funcionario);
	}
	
	public List<Funcionario> buscarFuncionarioCargo(Integer id_cargo){
		List<Funcionario> funcionario = funcionarioRepository.fetchByCargo(id_cargo);
		return funcionario;
	}
	
	public String buscarIdDoCargoPeloFuncionario(Integer id_funcionario){
		String funcionario = funcionarioRepository.fetchByIdCargo(id_funcionario);
		return funcionario;
	}
	
	@SuppressWarnings("rawtypes")
	public List<List> buscarFuncionariosComCargo(){
		List<List> funcionarioComCargo = funcionarioRepository.fetchByFuncionariosComCargo();
		return funcionarioComCargo;
	}
	
	public List<Funcionario> buscarFuncionariosInativos(){
		List<Funcionario> funcionarioInativo = funcionarioRepository.fetchByFuncionariosInativos();
		return funcionarioInativo;
	}
	
	public Integer quantidadeFuncionariosAtivos(){
		Integer funcionario = funcionarioRepository.quantidadeFuncionariosAtivos();
		return funcionario;
	}
}
