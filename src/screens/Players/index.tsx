import { Header } from "@components/Header";
import { Hightlight } from "@components/Highlight";
import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Hightlight
        title="Nome da turma"
        subtitle="Adione a galera e separe os times"
      />
    </Container>
  );
}
