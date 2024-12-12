import Navigation from "@/components/Navigation";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <MantineProvider defaultColorScheme="auto">
            <Navigation>{children}</Navigation>
        </MantineProvider>
    );
}
