import { Input as NativeInput, IInputProps} from "native-base"

export function Input({ ...props}: IInputProps) {
    return (
        <NativeInput
            bg="gray.700"
            h={14}
            px={4}
            borderWidth={0}
            fontSize="md"
            color="white"
            fontFamily="body"
            mb={4}
            placeholderTextColor="gray.300"
            _focus={{
                bg: "gray.700",
                borderWidth: 2,
                borderColor: "green.500"
            }}
            {...props}
        />
    )
}