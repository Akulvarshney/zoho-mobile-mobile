import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerStyle: { backgroundColor: '#f5f7f8' }, headerTintColor: '#172126' }}>
        <Stack.Screen name="index" options={{ title: 'Business Platform' }} />
        <Stack.Screen name="employee/index" options={{ title: 'Employee' }} />
        <Stack.Screen name="candidate/index" options={{ title: 'Candidate' }} />
        <Stack.Screen name="approvals/index" options={{ title: 'Approvals' }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  )
}
