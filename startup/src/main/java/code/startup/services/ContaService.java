package code.startup.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code.startup.models.Conta;
import code.startup.models.Funcionario;
import code.startup.repositories.ContaRepository;

@Service
public class ContaService {

	@Autowired
	private ContaRepository contaRepository;	

	@Autowired
	private FuncionarioService funcionarioService;
	
	public List<Conta> mostrarTodasContas(){
		List<Conta> conta = contaRepository.findAll();
		return conta;
	}
	
	public Conta mostrarUmaConta(Integer id_conta) {
		Optional<Conta> conta = contaRepository.findById(id_conta);
		return conta.orElseThrow();
	}
	
	public Conta cadastrarConta(Integer id_funcionario, Conta conta) {
		conta.setId_conta(null);
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
		conta.setFuncionario(funcionario);
		return contaRepository.save(conta);
	}
	
	public Conta editarConta(Conta conta) {
		mostrarUmaConta(conta.getId_conta());
		return contaRepository.save(conta);
	}
	
	public void deletarConta(Integer id_conta) {
		contaRepository.deleteById(id_conta);
	}
	
	@SuppressWarnings("rawtypes")
	public List<List> buscarContaDosFuncionarios(){
		List<List> contaDosFuncionarios = contaRepository.fetchByContaDosFuncionarios();
		return contaDosFuncionarios;
	}
	
	
}
