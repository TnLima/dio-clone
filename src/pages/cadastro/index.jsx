import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { api } from "../../services/api";

import { useForm } from "react-hook-form";

import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
} from "./styles";

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  console.log("errors", errors);

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
          <a href="/login" className="back">
            Voltar a pagina de Login
          </a>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="*Nome completo"
                leftIcon={<MdEmail />}
                name="nome"
                control={control}
                required
              />
              {/* {errors.email && <span>E-mail é obrigatório</span>} */}

              <Input
                type="email"
                placeholder="*Seu melhor @e-mail"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
                required
              />

              {/* {errors.senha && <span>Senha é obrigatório</span>} */}
              <Input
                type="phone"
                placeholder="+55 (11)96123-4567"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
                required
              />

              {/* {errors.senha && <span>Senha é obrigatório</span>} */}
              <Input
                type="password"
                placeholder="*Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
                required
              />
              {/* {errors.senha && <span>Senha é obrigatório</span>} */}

              <Button
                title="Criar Minha Conta Grátis"
                variant="secondary"
                type="submit"
              />
            </form>

            <Row>
              <footer>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                <a href="https://www.dio.me/policies"> Políticas de Privacidade </a>e os<a href="https://www.dio.me/terms"> Termos de Uso </a>da
                DIO.
              </footer>
            </Row>

            <div>
              Já tenho conta.
              <CriarText href="/Login"> Fazer Login.</CriarText>
            </div>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Cadastro;
