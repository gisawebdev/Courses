main() {
  // ==== Numeros
  int a = 10;
  double b = 5.5;

  int? c;

  int _a = 30;
  double $b = 40;

  double resultado = _a + $b;

  // print(resultado);

  // ==== String

  String nombre = 'Tony';
  String nombre2 = "Tony";
  String nombre3 = "O'Connor";
  String apellido = 'Stark';

  String nombreCompleto = '$nombre $apellido';

  String multilinea = '''
  Hola Mundo
  Como estas?
  $nombreCompleto
  O'Connor''';

  // print(multilinea);

  // ==== Booleans
  bool isActive = true;
  bool isNotActive = !isActive;

  print(isNotActive);
}
