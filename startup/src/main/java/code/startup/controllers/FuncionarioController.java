package code.startup.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import code.startup.models.Cargo;
import code.startup.models.Funcionario;
import code.startup.services.FuncionarioService;

@CrossOrigin
@RestController
@RequestMapping("startup")
public class FuncionarioController {

	@Autowired
	private FuncionarioService funcionarioService;
	
	@GetMapping("/funcionario")
	public List<Funcionario> mostrarTodosFuncionarios(){
		List<Funcionario> funcionario = funcionarioService.mostrarTodosFuncionarios();
		return funcionario;
	}
	
	@GetMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<?> buscaUmFuncionario(@PathVariable Integer id_funcionario){
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
		return ResponseEntity.ok().body(funcionario);		
	}
	
	@GetMapping("/funcionario/buscar-cargo/{id_cargo}")
	public List<Funcionario> buscarFuncionarioCargo(@PathVariable Integer id_cargo){
		List<Funcionario> funcionario = funcionarioService.buscarFuncionarioCargo(id_cargo);
		return funcionario;
	}
	
	@GetMapping("/funcionario/buscar-id-cargo/{id_funcionario}")
	public String buscarIdDoCargoPeloFuncionario(@PathVariable Integer id_funcionario){
		String funcionario = funcionarioService.buscarIdDoCargoPeloFuncionario(id_funcionario);
		return funcionario;
	}
	
	@SuppressWarnings("rawtypes")
	@GetMapping("/funcionario/buscar-funcionarios-com-cargo")
	public List<List> buscarFuncionariosComCargo(){
		List<List> funcionariosComCargo = funcionarioService.buscarFuncionariosComCargo();
		return funcionariosComCargo;
	}
	
	@GetMapping("/funcionario/inativos")
	public List<Funcionario> buscarFuncionariosInativos(){
		List<Funcionario> funcionariosInativos = funcionarioService.buscarFuncionariosInativos();
		return funcionariosInativos;
	}
	
	@PostMapping("/funcionario")
	public ResponseEntity<Void> inserirFuncionario(@RequestParam(value = "cargo") Integer id_cargo, @RequestBody Funcionario funcionario){
		funcionario = funcionarioService.adicionarFuncionario(id_cargo, funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/funcionario/{id}").buildAndExpand(funcionario.getId_funcionario()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@DeleteMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<Void> deletarFuncionario(@PathVariable Integer id_funcionario){
		funcionarioService.excluirFuncionario(id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<Void> editarFuncionario(@RequestParam(value = "cargo") Cargo cargo, @PathVariable Integer id_funcionario, @RequestBody Funcionario funcionario){
		funcionario.setId_funcionario(id_funcionario);
		funcionario.setCargo(cargo);
		funcionario = funcionarioService.editarFuncionario(funcionario);
		return ResponseEntity.noContent().build();
	}	
	
	@PutMapping("/funcionario/promover/{id_funcionario}")
	public ResponseEntity<Void> promoverFuncionario(@RequestParam(value = "cargo") Cargo cargo, @PathVariable Integer id_funcionario, @RequestBody Funcionario funcionario){
		funcionario.setId_funcionario(id_funcionario);
		funcionario.setCargo(cargo);
		funcionario = funcionarioService.editarFuncionario(funcionario);
		return ResponseEntity.noContent().build();
	}	
	
	@PutMapping("/funcionario/demitir/{id_funcionario}")
	public ResponseEntity<Void> demitirFuncionario(@PathVariable Integer id_funcionario, @RequestBody Funcionario funcionario){
		funcionario.setId_funcionario(id_funcionario);
		funcionario.setCargo(null);
		funcionario = funcionarioService.editarFuncionario(funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping("/funcionario/quantidade-total-ativos")
	public Integer quantidadeFuncionariosAtivos(){
		Integer funcionario = funcionarioService.quantidadeFuncionariosAtivos();
		return funcionario;
	}
}
