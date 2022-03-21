package code.startup.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.NumberFormat;



@Entity
public class Beneficios {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer codigo;
	
	@Column(nullable = false)
	private String nomeBeneficio;
	
	@NumberFormat(pattern = "#.##0,00")
	@Column(nullable = false)
	private Double valorBeneficio;
	
	@ManyToOne
	@JoinColumn(name = "id_funcionario")
	private Funcionario funcionario;

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getNomeBeneficio() {
		return nomeBeneficio;
	}

	public void setNomeBeneficio(String nomeBeneficio) {
		this.nomeBeneficio = nomeBeneficio;
	}

	public Double getValorBeneficio() {
		return valorBeneficio;
	}

	public void setValorBeneficio(Double valorBeneficio) {
		this.valorBeneficio = valorBeneficio;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}
	
	
}
