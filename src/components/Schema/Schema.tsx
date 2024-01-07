// Статья с описанием получения схемы: https://medium.com/@mrthankyou/how-to-get-a-graphql-schema-28915025de0e
import { useEffect, useState } from "react";
import { styles } from ".";
import { queryAll as query } from "./constants";
import {
  INITIAL_ENDPOINT,
  LangPages,
  ParamKeys,
} from "../../constants/constants";
import { useTranslate } from "../../hooks/useTranslate";
import { useSearchParams } from "react-router-dom";

interface Type {
  name: string;
  ofType?: Type;
  fields?: Field[];
}

interface Field {
  name: string;
  type: Type;
}

interface TypeItemProps {
  type: Type;
}

export function Schema(): JSX.Element {
  const [searchParams] = useSearchParams();
  const endpoint = searchParams.get(ParamKeys.endpoint) ?? INITIAL_ENDPOINT;

  const translate = useTranslate(LangPages.schema);
  type SchemaData = {
    __schema: {
      types: {
        name: string;
        fields: {
          name: string;
          args: {
            name: string;
            type: {
              name: string;
            };
          }[];
          type: {
            name: string;
          };
          isDeprecated: boolean;
          deprecationReason: string | null;
        }[];
      }[];
    };
  };

  function renderNestedTypes(type: Type) {
    if (!type.ofType) {
      return <span>{type.name}</span>;
    }
    return (
      <div>
        <div>
          <a href="#">{type.name}</a>
        </div>
        {type.fields && (
          <ul className={styles.fieldsList}>
            {type.fields.map((field) => (
              <li key={field.name}>
                <span className={styles.fieldName}>{field.name}:</span>
                {renderNestedTypes(field.type)}
              </li>
            ))}
          </ul>
        )}
        {renderNestedTypes(type.ofType)}
      </div>
    );
  }

  function TypeItem({ type }: TypeItemProps) {
    return (
      <div>
        <a href="#">{type.name}</a>
        {type.fields && (
          <ul className={styles.fieldsList}>
            {type.fields.map((field) => (
              <li key={field.name}>
                <span className={styles.fieldName}>{field.name}:</span>
                {renderNestedTypes(field.type)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  const [schemaData, setSchemaData] = useState<SchemaData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });
        const result = await response.json();
        setSchemaData(result.data);
      } catch (error) {
        console.error("Error fetching schema:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.sсhemaContainer}>
      <h1>{translate("schemaTitle")}</h1>
      {schemaData && (
        <div>
          <h4>{translate("rootTitle")}</h4>
          <div>
            {schemaData.__schema.types
              .filter((type) => type.name === "Root")
              .map((type) => (
                <div key={type.name}>
                  {type.fields && (
                    <ul className={styles.fieldsList}>
                      {type.fields.map((field) => (
                        <li key={field.name} className={styles.rootItem}>
                          <span className={styles.fieldName}>
                            {field.name}:
                          </span>{" "}
                          <span>
                            (
                            {field.args && (
                              <>
                                {field.args.map((arg) => (
                                  <div key={arg.name}>
                                    {arg.name}: {arg.type.name}
                                  </div>
                                ))}
                              </>
                            )}
                            )
                          </span>
                          {" : "}
                          <span>{field.type.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>

          <h4>{translate("allTypesTitle")}</h4>
          <div>
            {schemaData.__schema.types
              .filter(
                (type) =>
                  !type.name.startsWith("__") && !type.name.startsWith("Root"),
              )
              .map((type) => (
                <div key={type.name} className={styles.typeItem}>
                  <TypeItem type={type} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
