package code.startup.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import code.startup.models.Beneficios;
import code.startup.models.Funcionario;
import code.startup.repositories.BeneficiosRepository;

@Service
public class BeneficiosService {

	@Autowired
	private BeneficiosRepository beneficiosRepository;
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	public List<Beneficios> mostrarTodosBeneficios(){
		return beneficiosRepository.findAll();
	}
	
	public Beneficios buscarUmBeneficio(Integer codigo) {
		Optional<Beneficios> beneficios = beneficiosRepository.findById(codigo);
		return beneficios.orElseThrow();
	}
	
	public List<Beneficios> buscarBeneficioFuncionario(Integer id_funcionario){
		List<Beneficios> beneficios = beneficiosRepository.fetchBeneficiosFuncionario(id_funcionario);
		return beneficios;
	}
	
	public Beneficios adicionarBeneficio(Beneficios beneficios, Integer id_funcionario) {
		beneficios.setCodigo(null);
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
		beneficios.setFuncionario(funcionario);
		return beneficiosRepository.save(beneficios);
	}
	
	public Beneficios editarBeneficio(Beneficios beneficios) {
		buscarUmBeneficio(beneficios.getCodigo());
		return beneficiosRepository.save(beneficios);
	}
	
	public void deletarBeneficio(Integer codigo) {
		beneficiosRepository.deleteById(codigo);
	}
}
