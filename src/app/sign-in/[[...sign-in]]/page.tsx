import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex justify-center mt-32">
      <SignIn
        appearance={{
          elements: {
            card: 'rounded-2xl shadow-2xl',
            headerTitle: 'text-2xl',
            formFieldInput: 'h-12',
            formButtonPrimary: 'h-12 rounded-xl',
            socialButtonsBlockButton: 'h-12',
            dividerText: 'text-400',
          },
          variables: {
            colorPrimary: '#6366f1',
            borderRadius: '1rem',
          },
        }}
      />
    </main>
  );
}
