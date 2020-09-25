using System;
using System.Data.SqlClient;

namespace Datos
{
    public class ConectionManager
    {
       
        public SqlConnection _conexion;

        public ConectionManager(string connection)
        {
            _conexion = new SqlConnection(connection);
        }

        public void Open()
        {
            _conexion.Open();
        }

        public void Close()
        {
            _conexion.Close();
        }
    }
}