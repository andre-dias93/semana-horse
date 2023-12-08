object ProviderConnection: TProviderConnection
  Height = 332
  Width = 323
  PixelsPerInch = 144
  object FDConnection: TFDConnection
    Params.Strings = (
      
        'Database=C:\Projects\Palestras\semana-horse\2023\backend\db\prod' +
        'ucts.fdb'
      'User_Name=sysdba'
      'Password=masterkey'
      'DriverID=FB')
    Left = 132
    Top = 84
  end
  object FDPhysFBDriverLink: TFDPhysFBDriverLink
    Left = 132
    Top = 180
  end
end
