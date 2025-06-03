import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm/Index";
import type { TaskStateModel } from "../../model/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

type HomeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export function Home(props: HomeProps) {
    return(
        <MainTemplate>
            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}