import { Container, ErrorState } from '@go1d/go1d';

export default function Custom404() {
    return (
        <Container>
            <ErrorState title="No Content">
                This is not the page you were looking for.
            </ErrorState>
        </Container>
    )
}