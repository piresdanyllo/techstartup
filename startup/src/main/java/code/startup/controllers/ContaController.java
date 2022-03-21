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

import code.startup.models.Conta;
import code.startup.models.Funcionario;
import code.startup.services.ContaService;

@CrossOrigin
@RestController
@RequestMapping("startup")
public class ContaController {

	@Autowired
	private ContaService contaService;
	
	@GetMapping("/conta")
	public List<Conta> mostrarTodasContas(){
		List<Conta> conta = contaService.mostrarTodasContas();
		return conta;
	}
	
	@GetMapping("/conta/{id_conta}")
	public ResponseEntity<?> mostrarUmaConta(@PathVariable Integer id_conta){
		Conta conta = contaService.mostrarUmaConta(id_conta);
		return ResponseEntity.ok().body(conta);
	} 
	
	@PostMapping("/conta")
	public ResponseEntity<Void> cadastrarConta(@RequestParam(value = "funcionario") Integer id_funcionario, @RequestBody Conta conta){
		conta = contaService.cadastrarConta(id_funcionario, conta);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/conta/{id}").buildAndExpand(conta.getId_conta()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/conta/{id_conta}")
	public ResponseEntity<Void> editarConta(@RequestParam(value = "funcionario") Funcionario funcionario, @PathVariable Integer id_conta, @RequestBody Conta conta){
		conta.setId_conta(id_conta);
		conta.setFuncionario(funcionario);
		conta = contaService.editarConta(conta);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/conta/{id_conta}")
	public ResponseEntity<Void> deletarConta(@PathVariable Integer id_conta){
		contaService.deletarConta(id_conta);
		return ResponseEntity.noContent().build();
	}
	
	@SuppressWarnings("rawtypes")
	@GetMapping("/conta/contas-dos-funcionarios")
	public List<List> buscarContaDosFuncionarios(){
		List<List> contaDosFuncionarios = contaService.buscarContaDosFuncionarios();
		return contaDosFuncionarios;
	}
}
