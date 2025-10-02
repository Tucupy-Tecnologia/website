import { Button } from "@/components/ui/button";

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-4">
			<h1 className="text-3xl font-bold">Dashboard</h1>
			<Button>Criar um novo projeto</Button>
		</div>
	);
}
